import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { FlatList, HStack, VStack } from 'native-base';
import { useState } from 'react';

export function Home() {
  const [groups, setGroups] = useState(['Costa', 'Bíceps', 'Tríceps', 'Ombro'])
  const [groupSelected, setGroupSelected] = useState('')

  function handleSelectedGroup(group: string) {
    setGroupSelected(group)
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
              isActive={groupSelected.includes(item)}
              onPress={() => handleSelectedGroup(item)}
            />
          )}

          horizontal
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{ px: 8 }}
          my={10}
          maxH={10}
        />
    </VStack>
  )
}