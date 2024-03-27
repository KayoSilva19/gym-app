import { ExerciseCard } from '@components/ExerciseCard'
import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'
import { FlatList, HStack, Heading, VStack, Text } from 'native-base'
import { AppBottomNavigatorRoutesProps } from '@routes/app.routes'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const [exercices, setExercices] = useState(['1','2','3','4','5'])
  const [groups, setGroups] = useState(['Costas', 'Bíceps', 'Tríceps', 'Ombro'])
  const [groupSelected, setGroupSelected] = useState('COSTAS')

  const navigation =  useNavigation<AppBottomNavigatorRoutesProps>()

  function handleSelectedGroup(group: string) {
    setGroupSelected(group.toLocaleUpperCase())
  }

  function handleOpenExerciseDetails() {
    navigation.navigate('exercise')
  }

  return (
    <VStack flex={1}>
      <HomeHeader />
        <FlatList 
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Group
              key={item}
              name={item}
              isActive={groupSelected.includes(item.toLocaleUpperCase())}
              onPress={() => handleSelectedGroup(item)}
            />
          )}

          horizontal
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{ px: 8 }}
          my={10}
          maxH={10}
          minH={10}
        />

      <VStack flex={1} px={8}>
        <HStack 
          alignItems='center' 
          justifyContent='space-between' 
          mb={5}
        >
          <Heading 
            color='gray.200'
            fontSize='md'
          >
            Exercícios
          </Heading>
          <Text color='gray.200' fontSize='sm' >{exercices.length}</Text>
        </HStack>

        <FlatList 
          data={exercices}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <ExerciseCard onPress={handleOpenExerciseDetails} />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20 }}
        />

      </VStack>
    </VStack>
  )
}