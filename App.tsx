import { NavigationContainer } from "@react-navigation/native"
import { StackNavigator } from "./src/presentation/routes/StackNavigator"
import { SideMenuNavigator } from "./src/presentation/routes/SideMenuNavigation"

const App = () => {
  return (
    <NavigationContainer>
      <SideMenuNavigator />
    </NavigationContainer>
  )
}

export default App