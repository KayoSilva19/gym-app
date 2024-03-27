import { HStack, Heading, Icon, Text, VStack, useTheme } from 'native-base'
import { TouchableOpacity } from 'react-native'


import { UserPhoto } from './UserPhoto'
import { MaterialIcons } from '@expo/vector-icons'

export function HomeHeader() {
  const { sizes } = useTheme()
  const sizeImage = sizes[4]
  return (
    <HStack bg='gray.600' pt={16} pb={5} px={8} alignItems='center'>
      <UserPhoto 
        source={{ uri: 'https://github.com/KayoSilva19.png' }}
        size={sizeImage} 
        alt='Imagem de perfil'
        mr={4}
      />
      <VStack flex={1}>
        <Text color='gray.100' fontSize='md'>Olá,</Text>
        <Heading color='gray.100' fontSize='md'>Kayo</Heading>
      </VStack>

    <TouchableOpacity>
      <Icon
        as={MaterialIcons} 
        name='logout'
        color='gray.200'
        size={5}
      />
    </TouchableOpacity>

    </HStack>
  )
}