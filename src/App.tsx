
import './App.css'
import ViewBox  from './components/PercentView'


  type ArrowType = (x: number) => number 

  const arrow1:ArrowType = (x) => x + 1

  const arrow2:ArrowType = (x) => ( 
    x + 1
  )

  const arrow3:ArrowType = (x) => { 
    x = 2
    return ( //return na víc řádků
      x + 1
    )
  }

  const App = () => {
    let cislo: number = 20
    cislo -= 1

  return (
    <> 
      <ViewBox value={cislo} max={100} makeColor={(p) => "green"}/>
      <ViewBox value={cislo} max={200} makeColor={(p) => "blue"}/>
      <ViewBox value={200} max={300} makeColor={(p) => `rgb(${p*2*100}, 255, 255)`}/>
    </>
  )
}

export default App
