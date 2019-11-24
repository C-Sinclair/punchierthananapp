import "react-native"
import { configure } from 'enzyme'

const Adapter = require('enzyme-adapter-react-16')

configure({ adapter: new Adapter() })

declare global {
  var __TEST__
}
