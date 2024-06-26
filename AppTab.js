import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppList from "./AppList";
import AppForms from "./AppForms";

const { Navigator, Screen } = createBottomTabNavigator()

function AppTab() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    tabBarActiveTintColor: "#32264d",
                    tabBarInativeTintColor: "#clbcc",
                    tabBarActiveBackgroundColor: "#ebebf5",
                    tabBarInativeBackgroundColor: "#ebebf5",
                    tabBarLabelStyle: {
                        fontSize: 13,
                        position: 'absolute',
                        top: 15,
                        bottom: 0,
                        left: 0,
                        right: 0

                    },
                    tabBarIconStyle:{display:'none'}
                }}
            >
                <Screen name = "AppList" component ={AppList}
                options={{
                    tabBarLabel:"Compras"
                }}/>
                <Screen name = "AppForm" component ={AppForms}               
                options={{ 
                tabBarLabel:"Adicionar"
                }}/>
            </Navigator>
        </NavigationContainer>
    );
}
export default AppTab;