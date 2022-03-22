/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { AssetButton, AttachAsssets, Container, Content, Editor, Header, PostButton, ShareComments, ShareCreation, SharedContent, UploadImage, UserInfo } from "./styles";

import ReactPlayer from "react-player";

import { FaWindowClose, FaImage, FaVideo, FaComment } from 'react-icons/fa'

import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import { auth } from '../../services/firebase';
import { useDispatch, useSelector } from "react-redux";
import { selectUserName, selectUserPhoto, setUserLoginDetails } from '../../reducers/User/userSlice'

export function PostModal(props) {
  const [editorText, setEditorText] = useState("");
  const [shareImg, setShareImg] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState("");

  const handleChange = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`não é uma imagem, os arquivos são um ${typeof image}`)
      return;
    }
    setShareImg(image);
  };
  
  const switchAssetArea = (area) => {
    setShareImg("");
    setVideoLink("");
    setAssetArea(area);
  };

  const reset = (e) => {
    setEditorText("");
    setShareImg("");
    setVideoLink("");
    setAssetArea("");
    props.HandleClick(e);
  };

  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userName = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)

  useEffect(() => {
    auth.onAuthStateChanged( async (user) => {
      if (user) {
        setUser(user);
        navigate("/home") 
      };
    });
  }, 
  [userName]);

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  
  return (
  <>
    { props.showModal === "open" && 
      <Container>
        <Content>
          <Header>
            <h2>Criar publicação</h2>
            <button onClick={(event) => reset(event)}>
              <div onClick={(event) => reset(event)}>
                <FaWindowClose className="close"/>
              </div>
            </button>
          </Header>
          <SharedContent>
            <UserInfo>
              <img src={userPhoto} alt="" />
              <span>{userName}</span>
            </UserInfo>
              <Editor>
              <textarea 
              value={editorText} 
              onChange={(e) => setEditorText(e.target.value)}
              placeholder="No que você está pensando?"
              autoFocus={true}
              />
              { assetArea === "image" ? (
              <UploadImage>
                <input type="file" accept="image/gif, image/jpeg, image/jpg, image/png"
                  name="image"
                  id="file"
                  style={{display: "none"}}
                  onChange={handleChange}
                />
                <p>
                  <label 
                  htmlFor="file">
                    Selecione a imagem
                  </label>
                </p>
                {shareImg && ( <img src={URL.createObjectURL(shareImg)} />
                )}
                </UploadImage>
               ) : (
                assetArea === "media" && (
                <>
                  <input 
                  type="text" placeholder="Adicione o link do vídeo, por favor" 
                  value={videoLink}
                  onChange={(e) => setVideoLink(e.target.value)}
                  />

                  {videoLink && 
                  (<ReactPlayer width={"100%"} url={videoLink}/>
                  )}
                </>
                )
              )}
            </Editor>
          </SharedContent>
          <ShareCreation>
            <AttachAsssets>
              <AssetButton onClick={() => switchAssetArea("image")}>
                <FaImage />
              </AssetButton>

              <AssetButton onClick={() => switchAssetArea("media")}>
                <FaVideo />
              </AssetButton>
            </AttachAsssets>
            <ShareComments>
              <AssetButton>
                <FaComment />
                <span>
                  Qualquer <br/>
                  pessoa
                </span>
              </AssetButton>
            </ShareComments>

            <PostButton disabled={!editorText ? true : false}>
              Publicar
            </PostButton>
          </ShareCreation>
        </Content>
      </Container>
    }
  </>
  );
};