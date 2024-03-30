import { HStack, Heading, Icon, Pressable, Text, VStack, useTheme } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { UserPhoto } from './UserPhoto'
import { MaterialIcons } from '@expo/vector-icons'
import { AppBottomNavigatorRoutesProps } from '@routes/app.routes'

export function HomeHeader() {
    const { sizes } = useTheme()
  const sizeImage = sizes[4]
  
  const navigation = useNavigation<AppBottomNavigatorRoutesProps>()

  function goToProfile() {
    navigation.navigate('profile')
  }

  return (
    <HStack bg='gray.600' pt={16} pb={5} px={8} alignItems='center'>
      <Pressable onPress={goToProfile}>
        <UserPhoto 
          source={{ uri: 'https://github.com/KayoSilva19.png' }}
          size={sizeImage} 
          alt='Imagem de perfil'
          mr={4}
        />
      </Pressable>
      
      <VStack flex={1}>
        <Text color='gray.100' fontSize='md'>Olá,</Text>
        <Heading color='gray.100' fontSize='md' fontFamily='heading'>Kayo</Heading>
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