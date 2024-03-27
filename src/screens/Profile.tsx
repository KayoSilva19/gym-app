import { Center, Heading, ScrollView, Skeleton, Text, VStack } from 'native-base'
import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)
  const PHOTO_SIZE = 33

  return (
    <VStack flex={1}>
      <ScreenHeader title='perfil' />
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={10}>
          {
            photoIsLoading ? 
              <Skeleton 
                w={PHOTO_SIZE} 
                h={PHOTO_SIZE} 
                rounded='full' 
                startColor='gray.500'
                endColor='gray.400'
              />
            : 
              <UserPhoto 
                source={{ uri: 'https://github.com/KayoSilva19.png' }}
                size={PHOTO_SIZE}
                alt='imagem do usuário'
              />
          }

          <TouchableOpacity>
            <Text 
              color='green.500' 
              fontWeight='bold' 
              fontSize='md' 
              mt={2} 
              mb={8}
            >
              Alterar Foto
            </Text>
          </TouchableOpacity>

          <Input 
            bg='gray.600'
            placeholder='Kayo Silva'
          />
          <Input 
            bg='gray.600'
            placeholder='Kayo16silva@gmail.com'
            isDisabled
            
          />
        </Center>

        <VStack px={10} mt={12} mb={9}>
          <Heading color='gray.200' fontSize='md' mb={2}>Alterar Senha</Heading>
            <Input 
              bg='gray.600'
              placeholder='Senha antiga'
              secureTextEntry
            />
            <Input 
              bg='gray.600'
              placeholder='Nova senha'
              secureTextEntry
            />
            <Input 
              bg='gray.600'
              placeholder='Confirme a nova senha'
              secureTextEntry
            />

            <Button 
              title='Atualizar' 
              mt={4}
            />
        </VStack>
      </ScrollView>
    </VStack>
  )
}