import PlayerDeckContainer from "../components/PlayerDeckContainer";

 const GameScreen = () =>{
    return (
        <>
            <PlayerDeckContainer customClass="fixed bottom-10"/>
            
            <PlayerDeckContainer customClass="fixed top-10 rotate-180"/>
        </>
    )
 }

 export default GameScreen;