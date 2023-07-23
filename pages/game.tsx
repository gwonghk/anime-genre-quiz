import React, { type ReactElement } from 'react';
import { Button } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import { type Anime, type JikanResource } from '@tutkli/jikan-ts';

import { useQuery } from 'react-query';
// import styles from './Hero.module.css';

const Game = (): ReactElement => {
  const fetchRandomAnime = async (): Promise<Anime> =>
    await fetch('https://api.jikan.moe/v4/random/anime').then(async res =>
      await res.json()
    );

  const { isSuccess, isLoading, error, data: { data = {} } = {}, refetch } = useQuery('randomAnime', fetchRandomAnime
    , { enabled: false, refetchOnWindowFocus: false });

  const handleOnClick = async (): Promise<void> => {
    await refetch();
  };

  console.log(data);
  const { title, images, genres, themes } = data;
  const imgurl = images?.webp?.large_image_url ?? images?.webp?.image_url;

  const genreTags = genres?.map((genre: JikanResource) => genre.name) ?? [];
  const themeTags = themes?.map((theme: JikanResource) => theme.name) ?? [];
  const tags = [...genreTags, ...themeTags].toString();

  return (
    <Wrapper>
      <Button
        loading={isLoading}
        onClick={handleOnClick}
      >
        Random Anime
      </Button>
      <div>
        <h1>
          <span>{title}</span>
        </h1>
        <Container justifyContent="center" flexDirection="column">
          <Container className="cover-image-container">
            <img src={imgurl}></img>
          </Container>
          <Container>
            Tags:
            {tags}
            {/* <ButtonLink
              href="https://github.com/hoangvvo/nextjs-mongodb-app"
              type="secondary"
              className={styles.button}
            >
              GitHub
            </ButtonLink> */}
          </Container>
        </Container>

        <p>
          Description
        </p>
      </div>
    </Wrapper>
  );
};

export default Game;
