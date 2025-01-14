import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCards'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const AppProo = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <FlatCards/>
            <ElevatedCards/>
            <FancyCard/>
            <ContactList/>
            <ActionCard/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default AppProo