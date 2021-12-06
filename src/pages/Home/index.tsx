import { Suspense, useRef } from 'react'
import styled from '@emotion/styled'
import { Flex, Box, Text } from 'rebass'
import * as THREE from 'three'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import bg from '../../assets/images/planet-1.jpg'
import github_icon from '../../assets/images/gihub_icon.svg'
import twitter_icon from '../../assets/images/twitter_icon.svg'
import telegram_icon from '../../assets/images/telegram_icon.svg'

import planet1 from '../../assets/images/planet-2.png'
import planet3 from '../../assets/images/planet-3.png'
import track from '../../assets/images/track.png'
import logo1 from '../../assets/images/nest-labs.png'
import logo2 from '../../assets/images/crypto.png'
import logo3 from '../../assets/images/iNFT.png'
import logo4 from '../../assets/images/CoFiX.png'
import logo5 from '../../assets/images/winkrypto.png'
import logo6 from '../../assets/images/PARASSET.png'
import logo7 from '../../assets/images/huobi.png'
import logo8 from '../../assets/images/fortube.png'
import logo9 from '../../assets/images/polygon.png'

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  /* background: url(${bg}) center center / cover no-repeat; */
  background: #000;
`

const Header = styled.header`
  width: 100%;
  position: fixed;
  padding: 24px 12px;
  top: 0;
  left: 0;
  z-index: 30;
`

const NavLink = styled.a`
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  color: #ffffff;

  &:hover {
    color: #eaaa00;
  }
`

const Footer = styled.footer`
  width: 100%;
  position: fixed;
  padding: 24px 20px;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  z-index: 30;
`

const LinkIcon = styled.a<{ bg: string }>`
  width: 20px;
  height: 20px;
  margin-left: 14px;
  background: url(${props => props.bg}) center center / cover no-repeat;
  display: block;
`

const Content = styled.section`
  width: 100vw;
  height: 100vh;
  overflow-x: scroll;
  position: relative;
  z-index: 20;
`

const Button = styled.a`
  width: 180px;
  height: 48px;
  background: #eaaa00;
  border-radius: 24px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-gap: 60px 30px;

  img {
    width: auto;
    height: 100%;
  }
`

const PlanetWrap = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`

const Planet = styled.div`
  position: absolute;
  border: 2px solid #fff;
  background: url(${track}) center center / cover no-repeat;
  transform-style: preserve-3d;
  width: 120vmax;
  height: 120vmax;
  /* transform: scaleY(0.5) rotateZ(45deg); */
  border-radius: 50%;
  animation: planet-rotate 20s linear infinite;

  // 公转动画
  @keyframes planet-rotate {
    0% {
      transform: rotateX(50deg) rotateY(-35deg) rotateZ(0);
    }
    100% {
      transform: rotateX(50deg) rotateY(-35deg) rotateZ(-360deg);
    }
  }
`

const Ball = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 50%;
  background: url(${planet1}) center center / cover no-repeat;
  left: calc(50% - 25px);
  top: -25px;
  // 中和轨道的 scaleY 压缩，2 * 0.5 = 1 恢复原状，注意传入顺序，和 .planet 的 transform 是相反的，就像连续上了几个不同的锁，打开时要用和上锁相反的顺序去解
  transform: rotateZ(-45deg) scaleY(2);
  animation: self-rotate 20s linear infinite;

  // 自转动画
  @keyframes self-rotate {
    0% {
      transform: rotate(0) scaleY(2) rotate(45deg);
    }
    100% {
      transform: rotate(-360deg) scaleY(2) rotate(45deg);
    }
  }
`

const index: React.FC = () => {
  const logoArr = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9]

  const Box2 = (props: JSX.IntrinsicElements['mesh']) => {
    const ref = useRef<THREE.Mesh>(null!)
    const colorMap = useLoader(TextureLoader, planet3)

    useFrame((state, delta) => {
      ref.current.rotateY(-0.001)
      ref.current.rotateX(0.001)
    })
    return (
      <mesh {...props} ref={ref}>
        <sphereBufferGeometry args={[2.7, 80, 80]} />
        <meshStandardMaterial attach={'material'} map={colorMap} />
      </mesh>
    )
  }

  return (
    <MainWrapper>
      <Header>
        <Flex justifyContent="space-between">
          <NavLink>home</NavLink>
          <NavLink>data</NavLink>
          <NavLink>ecology</NavLink>
          <NavLink>developers</NavLink>
        </Flex>
      </Header>
      <PlanetWrap>
        <Planet>
          <Ball></Ball>
        </Planet>
        <Canvas>
          <ambientLight intensity={0.02} />
          <directionalLight color="white" position={[20, 20, 20]} intensity={1.5} />
          <directionalLight color="white" position={[20, 20, 20]} intensity={0.12} castShadow />
          <Suspense fallback={null}>
            <Box2 position={[0, 0, 0]} />
          </Suspense>
        </Canvas>
      </PlanetWrap>
      <Content>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          width="100%"
          height="100%"
          color="#FFF">
          <Text fontSize="38px" mb="10px" fontWeight="700">
            SECURING
          </Text>
          <Text fontSize="38px" mb="10px" fontWeight="700">
            DECENTRALIZED
          </Text>
          <Text fontSize="38px" fontWeight="700">
            ORACLES
          </Text>
          <Box textAlign="center" mt="20px" mb="30px">
            The NEST Protocol is the most secure oracle to build your next breakthrough DeFi
            creations
          </Box>
          <Button>White paper</Button>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          width="100%"
          height="100%"
          textAlign="center"
          color="#FFF">
          <Box mb="30px">
            <Text fontSize="48px" mb="5px" fontWeight="700">
              56
            </Text>
            <Text fontSize="14px">NUMBER OF ORACLE</Text>
          </Box>
          <Box mb="30px">
            <Text fontSize="48px" mb="5px" fontWeight="700" display="inline">
              48.5
              <Text fontSize="24px" display="inline">
                M
              </Text>
            </Text>
            <Text fontSize="14px">CUMULATIVE QUOTES</Text>
          </Box>
          <Box mb="30px">
            <Text fontSize="48px" mb="5px" fontWeight="700">
              12,463
            </Text>
            <Text fontSize="14px">CUMULATIVE CALLS</Text>
          </Box>
          <Box mb="30px">
            <Text fontSize="48px" mb="5px" fontWeight="700">
              128.32
            </Text>
            <Text fontSize="14px">CUMULATIVE INCOME (ETH)</Text>
          </Box>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          width="100%"
          height="100%"
          color="#FFF">
          <Grid>
            {logoArr.map(item => (
              <Box height="30px" textAlign="center" key={item}>
                <img src={item} alt="logo" />
              </Box>
            ))}
          </Grid>
        </Flex>
      </Content>
      <Footer>
        <Flex justifyContent="space-between" color="#FFF" fontSize="14px">
          <Box>&copy; 2021 NEST</Box>
          <Flex>
            <LinkIcon
              bg={github_icon}
              href="http://www.baidu.com"
              target="_blank"
              rel="noreferrer"></LinkIcon>
            <LinkIcon
              bg={telegram_icon}
              href="http://www.baidu.com"
              target="_blank"
              rel="noreferrer"></LinkIcon>
            <LinkIcon
              bg={twitter_icon}
              href="http://www.baidu.com"
              target="_blank"
              rel="noreferrer"></LinkIcon>
          </Flex>
        </Flex>
      </Footer>
    </MainWrapper>
  )
}

export default index
