import React from 'react';
import { Grid, Typography, Container, Box } from '@mui/material';
import Divider from '@mui/material/Divider';

const ResumeFull = () => {
  return (
    <>
      <Container>
        <main id="resumeFull" className="bgGrey">
          <Grid>
            <Box>
              <Typography variant="h4">Resume</Typography>
              <Divider sx={{ my: 1 }} />
              <Box className="frontendTech">
                <p className="white">
                  These are, but not limited to, the tech I use for building
                  client-side application
                </p>
                <div className="responsiveResumeGrid">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="resumeSkillsLogo"
                      src="/media/skillsLogos/javascript.svg"
                      alt="javascript"
                    />
                  </a>

                  <a href="https://react.dev/" target="_blank" rel="noreferrer">
                    <img
                      className="resumeSkillsLogo"
                      src="/media/skillsLogos/react-colored.svg"
                      alt="react"
                    />
                  </a>

                  <a
                    href="https://redux.js.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="resumeSkillsLogo"
                      src="/media/skillsLogos/redux-colored.svg"
                      alt="redux"
                    />
                  </a>

                  <a
                    href="https://sass-lang.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="resumeSkillsLogo"
                      src="/media/skillsLogos/sass-colored.svg"
                      alt="sass"
                    />
                  </a>

                  <a
                    href="https://vitejs.dev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="resumeSkillsLogo"
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg"
                      alt="vite"
                    />
                  </a>

                  <a href="https://mui.com/" target="_blank" rel="noreferrer">
                    <img
                      className="resumeSkillsLogo"
                      src="/media/skillsLogos/materialui-colored.svg"
                      alt="material ui"
                    />
                  </a>

                  <a
                    href="https://getbootstrap.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="resumeSkillsLogo"
                      src="/media/skillsLogos/bootstrap-colored.svg"
                      alt="bootstrap"
                    />
                  </a>

                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="resumeSkillsLogo"
                      src="/media/skillsLogos/html5-colored.svg"
                      alt="html"
                    />
                  </a>
                </div>
              </Box>

              <Box className="backendTech">
                <p className="white">
                  These are, but not limited to, the tech I use for building
                  fast and scalable backend applications
                </p>
                <div className="responsiveResumeGrid">
                  <a
                    href="https://nodejs.org/en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="resumeSkillsLogo"
                      src="https://res.cloudinary.com/dwa1jtluu/image/upload/q_auto,f_auto/v1653464816/kenjimmy.me/nodejs_ymmm0h.png"
                      alt="node.js"
                    />
                  </a>
                  <a
                    href="https://expressjs.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {' '}
                    <img
                      className="resumeSkillsLogo"
                      src="https://res.cloudinary.com/dwa1jtluu/image/upload/q_auto,f_auto/v1653464819/kenjimmy.me/express_r3isbu.png"
                      alt="express"
                    />
                  </a>
                  <a
                    href="https://www.mongodb.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="resumeSkillsLogo"
                      src="/media/skillsLogos/mongodb-colored.svg"
                      alt="mongodb"
                    />
                  </a>
                  <a
                    href="https://mongoosejs.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {' '}
                    <img
                      className="resumeSkillsLogo"
                      src="https://res.cloudinary.com/dwa1jtluu/image/upload/q_auto,f_auto/v1653464817/kenjimmy.me/mongoose_fmvf1q.png"
                      alt="mongoose"
                    />
                  </a>
                  <a
                    href="https://www.mysql.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="resumeSkillsLogo"
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
                      alt="MySQL"
                    />
                  </a>
                </div>
              </Box>

              <Box className="otherTech">
                <p className="white">Others...and more!</p>
                <div className="responsiveResumeGrid">
                  <a
                    href="https://www.npmjs.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="resumeSkillsLogo"
                      src="https://res.cloudinary.com/dwa1jtluu/image/upload/q_auto,f_auto/v1653464815/kenjimmy.me/npm_c4lqfw.png"
                      alt="npm"
                    />
                  </a>
                  <a
                    href="https://git-scm.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {' '}
                    <img
                      className="resumeSkillsLogo"
                      src="https://res.cloudinary.com/dwa1jtluu/image/upload/q_auto,f_auto/v1653464815/kenjimmy.me/git_fmjpe4.png"
                      alt="git"
                    />
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {' '}
                    <img
                      className="resumeSkillsLogo"
                      src="https://res.cloudinary.com/dwa1jtluu/image/upload/q_auto,f_auto/v1653464815/kenjimmy.me/github_cctzbu.png"
                      alt="github"
                    />
                  </a>
                  <a
                    href="https://www.docker.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {' '}
                    <img
                      className="resumeSkillsLogo"
                      src="https://res.cloudinary.com/dwa1jtluu/image/upload/q_auto,f_auto/v1653462522/kenjimmy.me/kisspng-using-docker-developing-and-deploying-software-wi-poznaj-aplikacjdocker-drupal-w-15-minut-docke-5b81de1974da70.1534794815352376574786_dcdmie.png"
                      alt="docker"
                    />
                  </a>
                  <a
                    href="https://aws.amazon.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {' '}
                    <img
                      className="resumeSkillsLogo"
                      src="https://res.cloudinary.com/dwa1jtluu/image/upload/q_auto,f_auto/v1653463600/kenjimmy.me/kisspng-logo-amazon-web-services-amazon-com-portable-netwo-5c57904c50a156.9772938415492424443303_rfhji1.png"
                      alt="aws"
                    />{' '}
                  </a>
                  <a
                    href="https://dashboard.heroku.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {' '}
                    <img
                      className="resumeSkillsLogo"
                      src="/media/skillsLogos/heroku-colored.svg"
                      alt="heroku"
                    />
                  </a>
                  <a
                    href="https://webpack.js.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {' '}
                    <img
                      className="resumeSkillsLogo"
                      src="https://res.cloudinary.com/dwa1jtluu/image/upload/q_auto,f_auto/v1653464819/kenjimmy.me/webpack_xjsy5q.png"
                      alt="webpack"
                    />
                  </a>
                  <a
                    href="https://www.postman.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {' '}
                    <img
                      className="resumeSkillsLogo"
                      src="https://res.cloudinary.com/dwa1jtluu/image/upload/q_auto,f_auto/v1653464818/kenjimmy.me/postman_thyot5.png"
                      alt="postman"
                    />
                  </a>
                </div>
              </Box>
            </Box>
          </Grid>
        </main>
      </Container>
    </>
  );
};
export default ResumeFull;
