import {HStack, Link, Spacer, Stack, Text} from "@chakra-ui/react";
import * as React from "react";
import BigTitle from "../../components/BigTitle";

const Info = () => {
  return (
    <Stack spacing={'48px'} align={'center'}>
      <BigTitle title={'Developers'}/>
      <HStack w={"full"} spacing={'44px'}>
        <HStack color={'#003232'} fontWeight={"semibold"} spacing={'20px'} w={'full'}>
          <Spacer/>
          <Stack p={'168px'}>
            <Stack
              fontWeight={'semibold'}
              color={'#003232'}
              whiteSpace={'break-spaces'}
            >
              <Text fontSize={'25px'}>Promote Industry <br/>Communication</Text>
              <Text fontSize={'15px'}>NRA’s research activities include but are not
                <br/>
                limited to writing research papers published in
                <br/>
                peer-reviewed international academic journals,
                <br/>
                writing research reports for the public and
                <br/>
                investors, and organizing conferences,
                <br/>
                workshops, webinars, and AMA.</Text>
            </Stack>
          </Stack>
        </HStack>
        <HStack color={'#003232'} fontWeight={"semibold"} spacing={'20px'} w={'full'}>
          <Stack p={'168px'}>
            <Stack
              w={'full'}
              fontWeight={'semibold'}
              color={'#003232'}
              whiteSpace={'break-spaces'}
            >
              <Text fontSize={'25px'}>Facilitate Academic
                <br/>
                Exploration</Text>
              <Text fontSize={'15px'}>NRA provides funding and job opportunities for
                <br/>
                researchers in different stages. NRA and NEST
                <br/>
                feel honored if the support helps scholars make
                <br/>
                breakthrough progress in academics and achieve
                <br/>
                significant contributions to human society from
                <br/>
                various perspectives.</Text>
            </Stack>
          </Stack>
          <Spacer/>
        </HStack>
      </HStack>
    </Stack>
  )
}

export default Info