import { MagnifyingGlass } from  'react-loader-spinner'
import { LoaderWrapper } from './Loader.styled'

export const Loader = props => {
    return <LoaderWrapper>
       <MagnifyingGlass
  visible={true}
  height="180"
  width="180"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = '#e15b64'
/>
   </LoaderWrapper>
}