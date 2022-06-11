import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

// Index from gastsby
// import * as React from 'react';
// import { Link, graphql } from 'gatsby';

// import { ColorModeProvider } from '../contexts/colorModeContext';
// import Bio from '../components/bio';
// import Layout from '../components/layout';
// import Seo from '../components/seo';
// import ArticleCard from '../components/ArticleCard';
// import Navbar from '../components/navbar';
// import { ThemeProvider } from 'styled-components';
// import { useColorMode } from '../contexts/colorModeContext';
// import { defaultTheme, darkThemeColors, lightThemeColors } from '../styles/theme';
// import GlobalStyle from '../styles/GlobalStyle';

// const ThemeContainer = ({ children }) => {
// 	const { isDarkMode, toggleColorMode } = useColorMode();
// 	const colors = isDarkMode ? darkThemeColors : lightThemeColors;
// 	const theme = { ...defaultTheme, colors };
// 	return (
// 		<ThemeProvider theme={theme}>
// 			<GlobalStyle />
// 			{children}
// 		</ThemeProvider>
// 	);
// };

// const BlogIndex = ({ data, location }) => {
// 	const siteTitle = data.site.siteMetadata?.title || `Title`;
// 	const posts = data.allMarkdownRemark.nodes;

// 	if (posts.length === 0) {
// 		return (
// 			<Layout location={location} title={siteTitle}>
// 				<Seo title="All posts" />
// 				<Bio />
// 				<p>
// 					No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the
// 					"gatsby-source-filesystem" plugin in gatsby-config.js).
// 				</p>
// 			</Layout>
// 		);
// 	}

// 	return (
// 		<>
// 			<ColorModeProvider>
// 				<ThemeContainer>
// 					<Navbar />
// 					<Layout location={location} title={siteTitle}>
// 						<Seo title="All posts" />
// 						<Bio />
// 						<ol style={{ listStyle: `none` }}>
// 							{posts.map((post) => (
// 								<ArticleCard key={post.fields.slug} post={post} />
// 							))}
// 							{posts.map((post) => {
// 								const title = post.frontmatter.title || post.fields.slug;

// 								return (
// 									<li key={post.fields.slug}>
// 										<article
// 											className="post-list-item"
// 											itemScope
// 											itemType="http://schema.org/Article"
// 										>
// 											<header>
// 												<h2>
// 													<Link to={post.fields.slug} itemProp="url">
// 														<span itemProp="headline">{title}</span>
// 													</Link>
// 												</h2>
// 												<small>{post.frontmatter.date}</small>
// 											</header>
// 											<section>
// 												<p
// 													dangerouslySetInnerHTML={{
// 														__html: post.frontmatter.description || post.excerpt,
// 													}}
// 													itemProp="description"
// 												/>
// 											</section>
// 										</article>
// 									</li>
// 								);
// 							})}
// 						</ol>
// 					</Layout>
// 				</ThemeContainer>
// 			</ColorModeProvider>
// 		</>
// 	);
// };

// export default BlogIndex;

// export const pageQuery = graphql`
// 	query {
// 		site {
// 			siteMetadata {
// 				title
// 			}
// 		}
// 		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
// 			nodes {
// 				excerpt
// 				fields {
// 					slug
// 				}
// 				frontmatter {
// 					date(formatString: "YYYY-MM-DD")
// 					title
// 					description
// 				}
// 			}
// 		}
// 	}
// `;

