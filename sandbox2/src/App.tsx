import {Button} from 'lemon-react-ui'

function App() {

  return (
    <div style={{display: 'grid', gap: '1rem', placeContent: 'center', height: '80vh'}}>
      <Button size='xs' radius='xs' >Insert text</Button>
      <Button size='sm' radius='sm'>Insert text</Button>
      <Button size='md' radius='md'>Insert text</Button>
      <Button size='lg' radius='lg'>Insert text</Button>
      <Button size='xl' radius='xl'>Insert text</Button>
    </div>
  )
}

export default App
