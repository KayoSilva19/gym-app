import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Center, Text, Heading, ScrollView } from 'native-base';

import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import LogoSvg from '@assets/logo.svg';
import BackgroundImage from '@assets/background.png'
import { Input } from '@components/Input';
import { Button } from '@components/Button';

type FormDataProps = {
  email: string,
  password: string,
}

const signIpSchema = yup.object({
  email: yup.string().required('Informe o e-mail.').email('E-mail inválido.'),
  password: yup.string().required('Informe a senha.').min(6, 'A senha deve ter pelo menos 6 dígitos')
})

export function SignIn() {

  const { control, handleSubmit, formState: { errors} } = useForm<FormDataProps>({
    resolver: yupResolver(signIpSchema),
  })

  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleNewAccount() {
    navigation.navigate('SignUp')
  }

  function handleSignIn({ email, password }: FormDataProps) {
    console.log('first', {email, password})
  }

  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}  px={10} pb={16}>
        <Image 
          source={BackgroundImage}
          defaultSource={BackgroundImage}
          alt='Pessoas Treinando'
          resizeMode='contain'
          position='absolute'
        />

        <Center my={24}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo.
          </Text>
        </Center>

        <Center>
          <Heading 
            color='gray.100' 
            fontSize='xl' 
            mb={6} 
            fontFamily='heading'
            >
              Acesse sua conta
          </Heading>

          <Controller  
            control={control} 
            name='email'
            render={({ field: { onChange, value }}) => (
              <Input 
                placeholder='E-mail' 
                keyboardType='email-address'
                autoCapitalize='none' 
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller 
            control={control} 
            name='password'
            render={({ field: {onChange, value }}) => (
              <Input 
                placeholder='Senha'
                secureTextEntry
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Button 
            title='Acessar'
            onPress={handleSubmit(handleSignIn)}
           />
        </Center>

        <Center mt={24}>
          <Text color='gray.100' fontSize='sm' mb={3} fontFamily='body'>
            Ainda não tenho acesso
          </Text>
          <Button 
            onPress={handleNewAccount}
            title='Criar conta' 
            variant='outline' 
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}