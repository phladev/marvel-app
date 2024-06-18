import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  text: string,
  variant: 'primary' | 'outline',
  onPress: () => void
}

const Button = ({text, variant, onPress}: ButtonProps) => {
  const getStyle = () => {
    switch (variant) {
      case 'primary':
        return [styles.primary]
      case 'outline':
        return [styles.outline]
      default:
        return [styles.primary]
    }
  }

  return ( 
    <TouchableOpacity  style={getStyle()} onPress={onPress}>
      <Text style={{color: '#fff', fontSize: 16}}>{text}</Text>
    </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
  primary: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',

    backgroundColor: '#D22525',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
  },
  outline: {
    backgroundColor: '#2C2C2C',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: 'black',
    borderWidth: 1
  },
})
 
export default Button;