import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { HStack, VStack } from 'native-base';
import { useState } from 'react';

export function Home() {
  const [group, setGroup] = useState(['costa', 'ombro'])
  const [groupSelected, setGroupSelected] = useState('')

  function handleSelectedGroup(group: string) {
    setGroupSelected(group)
  }

  return (
    <VStack flex={1}>
      <HomeHeader />
      <HStack>
        {group.map(group => {
          return (
            <Group
              key={group}
              name={group}
              isActive={groupSelected.includes(group)}
              onPress={() => handleSelectedGroup(group)}
            />
          )
        })}

      </HStack>
    </VStack>
  )
}