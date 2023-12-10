'use client'
import { SharedSceneProps } from '@/schema/SceneCreateSchema'
import { RANGE_STEP } from '@/app/utils/macros'

const Toolbar = ({ sharedScene, setSharedScene }: SharedSceneProps) => {
  function handleVectorChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    const field = e.target.id
    switch (field) {
      case 'positionX':
        setSharedScene({
          ...sharedScene,
          position: `${e.target.value},${sharedScene.position.split(',')[1]},${
            sharedScene.position.split(',')[2]
          }`,
        })
        break
      case 'positionY':
        setSharedScene({
          ...sharedScene,
          position: `${sharedScene.position.split(',')[0]},${e.target.value},${
            sharedScene.position.split(',')[2]
          }`,
        })
        break
      case 'positionZ':
        setSharedScene({
          ...sharedScene,
          position: `${sharedScene.position.split(',')[0]},
          ${sharedScene.position.split(',')[1]},${e.target.value}`,
        })
        break
      case 'rotationX':
        setSharedScene({
          ...sharedScene,
          rotation: `${e.target.value},${sharedScene.rotation.split(',')[1]},${
            sharedScene.rotation.split(',')[2]
          }`,
        })
        break
      case 'rotationY':
        setSharedScene({
          ...sharedScene,
          rotation: `${sharedScene.rotation.split(',')[0]},${e.target.value},${
            sharedScene.rotation.split(',')[2]
          }`,
        })
        break
      case 'rotationZ':
        setSharedScene({
          ...sharedScene,
          rotation: `${sharedScene.rotation.split(',')[0]},
            ${sharedScene.rotation.split(',')[1]},${e.target.value}`,
        })
        break
    }
  }
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
        value={sharedScene.position.split(',')[0]}
        step={RANGE_STEP}
        onChange={handleVectorChange}
      />
      <input
        type='range'
        id='positionY'
        name='position'
        min={-3.14}
        max={3.14}
        value={sharedScene.position.split(',')[1]}
        step={RANGE_STEP}
        onChange={handleVectorChange}
      />
      <input
        type='range'
        id='positionZ'
        name='position'
        min={-3.14}
        max={3.14}
        value={sharedScene.position.split(',')[2]}
        step={RANGE_STEP}
        onChange={handleVectorChange}
      />
      <input
        type='range'
        id='rotationX'
        name='rotation'
        min={-3.14}
        max={3.14}
        value={sharedScene.rotation.split(',')[0]}
        step={RANGE_STEP}
        onChange={handleVectorChange}
      />
      <input
        type='range'
        id='rotationY'
        name='rotation'
        min={-3.14}
        max={3.14}
        value={sharedScene.rotation.split(',')[1]}
        step={RANGE_STEP}
        onChange={handleVectorChange}
      />
      <input
        type='range'
        id='rotationZ'
        name='rotation'
        min={-3.14}
        max={3.14}
        value={sharedScene.rotation.split(',')[2]}
        step={RANGE_STEP}
        onChange={handleVectorChange}
      />
    </form>
  )
}

export default Toolbar
