// import React from 'react';
// import styled from 'styled-components';
// import { Link } from 'gatsby';
// import { StaticImage } from 'gatsby-plugin-image';
// import articleImg from '../images/avatar.png';

// const ArticleCard = ({ post }) => {
//     console.log('pppost', post);
//     const { frontmatter: { title, date, description } } = post;
//     console.log({ description });
//     return (
//         <CardWrapper to={post.fields.slug}>
//             <ArticleImg src={articleImg} />
//             <ContentWrapper>
//                 <Title>{title}</Title>
//                 <p>{date}</p>
//                 <p>{post.frontmatter.description || post.excerpt}</p>
//             </ContentWrapper>
//         </CardWrapper>
//     );
// };

// const CardWrapper = styled(Link)`
//   display: flex;
//   align-items: flex-start;
//   border: 1px solid hsla(0,0%,100%,.5);
//   border-radius: 6px;
//   margin: 0 0 16px 0;
//   height: 200px;
//   color: ${({ theme }) => theme.colors.primaryText};

//   :focus-visible {
//     outline-offset: 1px;
//     outline-width: 1px;
//     transition: 0.75s;
//   }

//   :hover {
//     border: 1px solid #fff;
//     transition: 0.5s;
//     box-shadow: 0px 1px 8px rgb(255, 255, 255);
//   }
// `;

// const ArticleImg = styled.img`
//   color: red;
//   width: 280px;
//   height: 100%;
//   border-top-left-radius: 5px;
//   border-bottom-left-radius: 5px;
// `;

// const ContentWrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   padding: var(--spacing-3) var(--spacing-4);
// `;

// const Title = styled.div`
//   font-size: var(--fontSize-4)
// `;

// export default ArticleCard;
