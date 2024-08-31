import { CoverDemo } from '@/components/CoverDemo'
import { Link } from '@/components/Link'
import { MovingCards } from '@/components/MovingCards'
import { Portfolio } from '@/components/Portfolio'
import { Skill } from '@/components/Skill'
import { SprakeBox } from '@/components/SprakeBox'
import { TabsDemo } from '@/components/TabsBar'
import { Tabs } from '@mui/material'
import React from 'react'

export default function page() {
  return (
    <div>
      <SprakeBox/>
      <CoverDemo/>
      <Skill/>
      <Portfolio/>
      <Link/>
      <MovingCards/>
      <TabsDemo/>
    </div>
  )
}
