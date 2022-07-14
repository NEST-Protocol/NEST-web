import {Box, HStack, Link, SimpleGrid, VStack, chakra, useMediaQuery, Text, Stack} from "@chakra-ui/react";
import twitterImg from '../../assets/img/Twitter.png'
import telegramImg from '../../assets/img/Telegram.png'
import mediumImg from '../../assets/img/Medium.png'
import youtubeImg from '../../assets/img/youtube.png'
import Right1 from '../../assets/svg/RIGHT_1_icon.svg'

const Community = () => {
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)')

  const menu = [
    {
      label: 'Twitter',
      bg: twitterImg,
      link: 'https://twitter.com/nest_protocol/'
    },
    {
      label: 'Telegram',
      bg: telegramImg,
      link: 'https://t.me/nest_chat/'
    },
    {
      label: 'Discord',
      bg: mediumImg,
      link: ''
    },
    {
      label: 'YouTube',
      bg: youtubeImg,
      link: 'https://www.youtube.com/channel/UC9o8XQ9GGrQFs5x6WYnh9mQ'
    }
  ]

  return (
    <Stack align={"center"}>
        <SimpleGrid columns={2} spacing={['22px', '22px', '44px']}>
          {menu.map(item => (
            <VStack
              key={item.label}
              borderRadius={'12px'}
              spacing={0}
              w={['full', 'full', '308px']}
              border={'1px solid #EEEEEE'}
              boxShadow={'0px 0px 45px 5px #E5E5E5'}
              overflow={'hidden'}
            >
              <Box overflow={"hidden"}>
                <chakra.img src={item.bg} alt={item.label} _hover={{transform: 'scale(1.05)'}}/>
              </Box>
              <HStack
                px={['22px', '22px', '44px']}
                py={['11px', '11px', '33px']}
                justifyContent={'space-between'}
                w={'full'}
                alignItems={'center'}
              >
                <Text fontSize={['12px', '12px', '17px']} fontWeight={'semibold'} color={'#003232'}>
                  {item.label}
                </Text>
                <Link isExternal href={item.link}>
                  {isLargerThan480 ? (
                    <chakra.img src={Right1} alt={'right'} _hover={{transform: 'translateX(8px)'}}/>
                  ) : (
                    <chakra.img src={Right1} alt={'right'} height={'24px'} width={'24px'}/>
                  )}
                </Link>
              </HStack>
            </VStack>
          ))}
        </SimpleGrid>
      </Stack>
  )
}

export default Community