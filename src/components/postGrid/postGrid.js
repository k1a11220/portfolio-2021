import React, { useRef } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Card from "./card";
import { ThumbnailWrapper } from "./centeredImg";
import useInfiniteScroll from "hooks/useInfiniteScroll";

const PostGrid = ({ posts }) => {
  const scrollEdgeRef = useRef(null);
  const currentList = useInfiniteScroll({
    posts,
    scrollEdgeRef,
    maxPostNum: 10,
    offsetY: 200,
  });

  return (
    <Grid role="list">
      {currentList.map((data) => {
        const {
          id,
          slug,
          title,
          desc,
          date,
          category,
          thumbnail,
          alt,
          client,
        } = data;
        const ariaLabel = `${title} - ${category} - Posted on ${date}`;
        return (
          <List key={id} role="listitem">
            <Link to={slug} aria-label={ariaLabel}>
              <Card
                thumbnail={thumbnail}
                alt={alt}
                client={client}
                title={title}
                desc={desc}
                date={date}
              />
            </Link>
          </List>
        );
      })}
      <div ref={scrollEdgeRef} />
    </Grid>
  );
};

const Grid = styled.ul`
  display: grid;
  grid-gap: var(--grid-gap-xl);
  grid-template-columns: repeat(2, 1fr);
  list-style: none;

  & > li {
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.device.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    grid-gap: var(--grid-gap-lg);
  }
`;

const List = styled.li`
  box-sizing: border-box;
  grid-column: span 1;

  a {
    display: block;
    height: 100%;
  }

  a:hover ${ThumbnailWrapper}::after, a:focus ${ThumbnailWrapper}::after {
    opacity: 1;
  }

  & .gatsby-image-wrapper {
    transition: opacity 1s ease-out, transform 0.5s ease;
  }

  a:hover,
  a:focus {
    .gatsby-image-wrapper {
      transform: scale(1.03);
    }
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    grid-column: span 3;
  }
`;

export default PostGrid;
