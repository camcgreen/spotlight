'use client'
import { useState } from 'react'
import { SharedSceneProps } from '@/schema/SceneCreateSchema'
import { RANGE_STEP } from '@/app/utils/macros'

const Toolbar = ({ sharedScene, setSharedScene }: SharedSceneProps) => {
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    e.preventDefault()
    const field = e.target.id
    setSharedScene({ ...sharedScene, [field]: e.target.value })
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // need to create an endpoint for updating the scene
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        id='title'
        name='title'
        minLength={1}
        maxLength={30}
        placeholder={sharedScene.title}
        onChange={handleChange}
      />
      <select name='device' id='device' onChange={handleChange}>
        <option value='iPhone'>iPhone</option>
        <option value='iPad'>iPad</option>
        <option value='MacBook'>MacBook</option>
      </select>
      <input
        type='text'
        id='imageLink'
        name='imageLink'
        placeholder={
          sharedScene.imageLink ? sharedScene.imageLink : 'Image Link'
        }
        onChange={handleChange}
      />
      <input
        type='color'
        id='backgroundColor'
        placeholder={sharedScene.backgroundColor}
        onChange={handleChange}
      />
      <input
        type='range'
        id='positionX'
        name='position'
        min={-3.14}
        max={3.14}
        value={sharedScene.positionX}
        step={RANGE_STEP}
        onChange={handleChange}
      />
      <input
        type='range'
        id='positionY'
        name='position'
        min={-3.14}
        max={3.14}
        value={sharedScene.positionY}
        step={RANGE_STEP}
        onChange={handleChange}
      />
      <input
        type='range'
        id='positionZ'
        name='position'
        min={-3.14}
        max={3.14}
        value={sharedScene.positionZ}
        step={RANGE_STEP}
        onChange={handleChange}
      />
      <input
        type='range'
        id='rotationX'
        name='rotation'
        min={-3.14}
        max={3.14}
        value={sharedScene.rotationX}
        step={RANGE_STEP}
        onChange={handleChange}
      />
      <input
        type='range'
        id='rotationY'
        name='rotation'
        min={-3.14}
        max={3.14}
        value={sharedScene.rotationY}
        step={RANGE_STEP}
        onChange={handleChange}
      />
      <input
        type='range'
        id='rotationZ'
        name='rotation'
        min={-3.14}
        max={3.14}
        value={sharedScene.rotationZ}
        step={RANGE_STEP}
        onChange={handleChange}
      />
    </form>
  )
}

export default Toolbar
