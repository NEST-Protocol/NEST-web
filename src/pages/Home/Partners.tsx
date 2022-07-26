import {chakra, SimpleGrid, Stack} from "@chakra-ui/react";
import huobi from "../../assets/svg/huobi.svg";
import binance from "../../assets/svg/binance.svg";
import kcc from "../../assets/svg/kcc.svg";
import polygon from "../../assets/svg/polygon.svg";
import cointelegraph from "../../assets/svg/cointelegraph.svg";
import cube from "../../assets/svg/cube.svg";
import peckshield from "../../assets/svg/peckshield.svg";
import fortube from "../../assets/svg/fortube.svg";
import polynetwork from "../../assets/svg/polynetwork.svg";
import CoFiX from "../../assets/svg/CoFiX.svg";
import Parasset from "../../assets/svg/Parasset.svg";
import certik from "../../assets/svg/certik.svg";
import * as React from "react";
import BigTitle from "../../components/BigTitle";
import Home_bg_6 from '../../assets/image/Home/Home_bg_6.jpg'

const Partners = () => {
  return (
    <Stack spacing={'48px'} align={'center'}>
      <BigTitle title={'Integrations & Partners'}/>
      <Stack
        align={'center'}
        justify={'center'}
        spacing={'16px'}
        h={'440px'}
        w={"full"}
        bgImage={Home_bg_6}
        bgPosition={"bottom"}
        bgSize={'cover'}
        px={['30px']}
      >
        <SimpleGrid columns={[3, 3, 4, 4]} zIndex={1} spacing={['20px', '40px']}>
          {[
            {
              label: 'Huobi',
              logo: huobi,
              link: 'https://www.huobi.com/'
            },
            {
              label: 'Binance',
              logo: binance,
              link: 'https://www.binance.com/'
            },
            {
              label: 'kcc',
              logo: kcc,
              link: 'https://kcc.io'
            },
            {
              label: 'polygon',
              logo: polygon,
              link: 'https://polygon.technology/'
            },
            {
              label: 'cointelegraph',
              logo: cointelegraph,
              link: 'https://cointelegraph.com/'
            },
            {
              label: 'cube',
              logo: cube,
              link: 'https://cube.network/'
            },
            {
              label: 'pechshield',
              logo: peckshield,
              link: 'https://peckshield.com/'
            },
            {
              label: 'fortube',
              logo: fortube,
              link: 'https://for.tube'
            },
            {
              label: 'polynetwork',
              logo: polynetwork,
              link: 'https://polygon.technology/'
            },
            {
              label: 'cofix',
              logo: CoFiX,
              link: 'https://cofix.tech/'
            },
            {
              label: 'parasset',
              logo: Parasset,
              link: 'https://www.parasset.top/'
            },
            {
              label: 'certik',
              logo: certik,
              link: 'https://www.certik.com/'
            },
          ].map(item => (
            <chakra.img
              src={item.logo} alt={item.label} h={'48px'}
              cursor={"pointer"}
              onClick={() => {
                window.open(item.link, '_blank')
              }}/>
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  )
}

export default Partners