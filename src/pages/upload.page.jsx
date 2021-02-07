import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Axios } from '../providers/axios';
import { toast } from 'react-toastify';
import PageWrapper from '../components/UI/page-wrapper';
import Input from '../components/UI/input';
import Submit from '../components/UI/submit';
import { FaTrashAlt } from 'react-icons/fa';
import { BsFillPlusSquareFill } from 'react-icons/bs';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  max-width: 90%;
  margin: 0 auto;
  color: #fff;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Select = styled.select`
  padding: 10px;
  margin-bottom: 10px;
`;

const ImagePreview = styled.img`
  width: 300px;
  height: 300px;
  max-width: 80%;
  max-height: 80%;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const GenrePreview = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  background-color: #ccc;
  border: 1px solid black;
  margin: 5px 0;
  color: black;
`;

const RemoveIcon = styled.span`
  margin-left: auto;
  font-size: 1.5rem;
  cursor: pointer;
`;

const EpInputBtns = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    width: 45%;
    padding: 5px;
    outline: none;
    border: none;
    margin-bottom: 10px;
    cursor: pointer;
  }
`;

const UploadPage = ({ user, history }) => {
  const [mainImagePreview, setMainImagePreview] = useState('');
  const [mainImage, setMainImage] = useState('');

  const [backImagePreview, setBackImagePreview] = useState('');
  const [backImage, setBackImage] = useState('');

  const [genres, setGenres] = useState([]);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');

  const [epInputs, setEpInputs] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    if (!user) {
      history.push('/');
    } else if (!user.isAdmin) {
      history.push('/');
    }
  }, [user, history]);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const name = e.target.name;
    previewFile(file, name);
  };

  const previewFile = (file, name) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (name === 'mainImage') {
        setMainImagePreview(reader.result);
      } else {
        setBackImagePreview(reader.result);
      }
    };
  };

  const onChangeGenres = (e) => {
    const chosen = genres.find((genre) => genre === e.target.value);
    if (chosen) {
      return;
    } else if (e.target.value === '') {
      return;
    } else {
      setGenres((prevState) => [...prevState, e.target.value]);
    }
  };

  const removeGenre = (genre) => {
    const updatedGenres = genres.filter((gen) => gen !== genre);
    setGenres(updatedGenres);
  };

  const onEpisodeChange = (url, i) => {
    const episodesCopy = [...episodes];
    const exists = episodesCopy.find((ep) => ep.ep === i + 1);
    if (exists) {
      episodesCopy.forEach((ep) => {
        if (ep.ep === i + 1) {
          return (ep.url = url);
        } else {
          return ep;
        }
      });

      setEpisodes([...episodesCopy]);
    } else {
      setEpisodes((prevState) => [...prevState, { url, ep: i + 1 }]);
    }
  };

  const removeEpisodeInput = (i) => {
    console.log('testing');
    const eps = [...epInputs];
    eps.pop();
    setEpInputs(eps);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios({
        method: 'POST',
        url: 'api/animes/new',
        data: {
          name,
          description,
          year,
          genres,
          mainImage: mainImagePreview,
          backImage: backImagePreview,
          episodes,
        },
      });

      setName('');
      setDescription('');
      setYear('');
      setGenres([]);
      setMainImagePreview('');
      setBackImagePreview('');
      setEpisodes([]);
      setEpInputs([]);
      toast.success('UPLOADED SUCCESSFULLY');
    } catch (err) {
      toast.error(err.response.msg || 'CAN NOT UPLOAD');
    }
  };

  return (
    <PageWrapper>
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <label htmlFor='name'>Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
            />
          </InputWrapper>

          <InputWrapper>
            <label htmlFor='description'>Description</label>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type='text'
            />
          </InputWrapper>

          <InputWrapper>
            <label htmlFor='genres'>Genres</label>
            <Select name='genres' id='' onChange={onChangeGenres}>
              <option value=''></option>
              <option value='seinen'>Seinen</option>
              <option value='fantasy'>Fantasy</option>
              <option value='shounen'>Shounen</option>
            </Select>

            {genres.length > 0 &&
              genres.map((genre) => (
                <GenrePreview key={genre}>
                  {genre}{' '}
                  <RemoveIcon onClick={() => removeGenre(genre)}>
                    <FaTrashAlt />
                  </RemoveIcon>
                </GenrePreview>
              ))}
          </InputWrapper>

          <InputWrapper>
            <label htmlFor='year'>Year</label>
            <Input
              value={year}
              onChange={(e) => setYear(e.target.value)}
              type='text'
            />
          </InputWrapper>

          {epInputs.map((ep, i) => (
            <InputWrapper key={i}>
              <label htmlFor={'episode' + i}>Episode {i + 1}</label>
              <Input
                required={true}
                onChange={(e) => onEpisodeChange(e.target.value, i)}
                type='text'
              />
            </InputWrapper>
          ))}

          <EpInputBtns>
            <button
              type='button'
              onClick={() => setEpInputs((prevState) => [...prevState, 'o'])}
            >
              Add Ep Input <BsFillPlusSquareFill />
            </button>
            <button type='button' onClick={() => removeEpisodeInput()}>
              Remove Ep Input <FaTrashAlt />{' '}
            </button>
          </EpInputBtns>

          <InputWrapper>
            <label htmlFor='mainImage' className='custom-file-upload'>
              Main image
            </label>
            <Input
              type='file'
              name='mainImage'
              onChange={handleFileInputChange}
              value={mainImage}
              id='mainImage'
            />
            {mainImagePreview && (
              <ImagePreview src={mainImagePreview} alt='image' />
            )}
          </InputWrapper>

          <InputWrapper>
            <label htmlFor='backImage' className='custom-file-upload'>
              Background image
            </label>
            <Input
              type='file'
              name='backImage'
              onChange={handleFileInputChange}
              value={backImage}
              id='backImage'
            />
            {backImagePreview && (
              <ImagePreview src={backImagePreview} alt='image' />
            )}
          </InputWrapper>

          <Submit value='UPLOAD' type='submit' />
        </form>
      </Wrapper>
    </PageWrapper>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(UploadPage);
