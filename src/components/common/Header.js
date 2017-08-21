import React from 'react';
import { Text, View } from 'react-native';

//Component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

//styles
const styles = {
    viewStyle: { 
        backgroundColor: '#FF8C00',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        elevation: 2,
        position: 'relative'
     },
    textStyle: { 
        fontSize: 20,
        color: '#fff'
    }
    
};

//Make component available to other parts of the app
export { Header };
