import React from 'react'
import { View , Text ,Button } from 'react-native'

class Screen extends React.Component{
    constructor(props){
        super(props);
       this.state={
        pressCount:0
       }

    }


    render(){
        return(
            <View style ={{justifyContent:"center" ,alignItems:"center", margin:10}}>
                <Text>Press Count:{this.state.pressCount}</Text>
                <Button title="Press Me" onPress={()=>this.setState({pressCount:this.state.pressCount+1})}></Button>
                <Button title="Press Me" onPress={()=>this.setState((currentState)=>{
                    return{
                        pressCount:this.state.pressCount+1
                    }
                })}></Button>
            </View>
        )
    }
}


export default Screen
