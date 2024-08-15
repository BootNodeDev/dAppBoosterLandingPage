import { type FC, type HTMLAttributes } from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.svg`
  display: block;
  flex-shrink: 0;
  width: 24px;
`

const Icon: FC<HTMLAttributes<SVGElement>> = ({ ...restProps }) => (
  <Wrapper fill="none" viewBox="0 0 382 381" xmlns="http://www.w3.org/2000/svg" {...restProps}>
    <path
      d="M191.158 380.495C297.186 380.495 381.336 294.674 381.336 190.341C381.336 84.3262 295.503 0.187256 191.158 0.187256C85.1305 0.187256 0.981354 86.009 0.981354 190.341C0.981354 294.674 86.8135 380.495 191.158 380.495Z"
      fill="#2C374B"
    />
    <path
      clipRule="evenodd"
      d="M295.503 121.347C293.821 119.665 211.354 70.864 201.256 67.4985C197.89 65.8157 189.476 64.1329 184.427 65.8157C179.378 67.4985 91.8625 117.982 88.4965 121.347C86.8135 123.03 85.1305 126.396 83.4475 128.079C81.7646 131.444 81.7646 133.127 81.7646 192.024V252.604L93.5455 259.335C100.277 262.701 105.326 266.066 105.326 266.066C107.009 266.066 186.11 139.858 186.11 138.175C186.11 136.492 167.597 136.492 162.548 138.175C155.816 139.858 150.767 143.224 147.401 146.589C145.718 148.272 135.62 165.1 122.156 183.61C110.375 202.121 100.277 218.949 100.277 218.949C100.277 218.949 100.277 202.121 100.277 178.562V136.492L101.96 134.81C105.326 131.444 191.159 82.6435 194.524 82.6435C196.207 82.6435 197.89 82.6435 218.086 94.4229C224.818 97.7885 243.331 107.885 258.478 117.982C273.625 126.396 287.089 134.81 288.772 136.492L290.455 138.175V225.68L248.38 160.051C246.697 156.686 245.014 153.32 243.331 151.637C243.331 151.637 241.648 155.003 231.55 171.831C229.867 173.514 228.184 176.879 228.184 178.562L226.501 181.927L228.184 183.61L229.867 185.293C229.867 185.293 229.867 186.976 231.55 186.976L234.916 192.024C234.916 192.024 234.916 193.707 236.599 193.707C238.282 195.39 239.965 198.755 239.965 200.438C239.965 200.438 239.965 200.438 239.965 202.121L275.308 259.335L271.942 261.018C270.259 262.701 268.576 262.701 266.893 262.701L223.135 195.39L221.452 193.707L218.086 200.438L201.256 227.362L234.916 281.211C229.867 284.577 201.256 304.77 199.573 304.77C197.89 304.77 159.182 279.529 160.865 277.846C160.865 277.846 172.646 257.653 186.11 234.094C197.89 213.9 213.037 188.659 223.135 171.831C234.916 151.637 239.965 141.541 239.965 141.541C239.965 141.541 231.55 141.541 221.452 141.541H204.622L165.914 205.486C152.45 229.045 138.986 250.921 132.254 262.701C120.473 264.384 117.107 267.749 117.107 267.749L115.424 271.115L145.718 287.943C162.548 298.039 177.695 306.453 181.061 308.136C186.11 311.501 194.524 311.501 197.89 311.501C201.256 309.819 288.772 259.335 293.82 255.97C295.503 254.287 297.186 252.604 298.869 249.239L300.552 244.19V188.659V133.127L298.869 129.761C298.869 126.396 295.503 123.03 295.503 121.347Z"
      fill="white"
      fillRule="evenodd"
    />
    <path
      d="M287.089 223.997L236.599 146.589L218.086 176.879L266.893 255.97L288.772 245.873L287.089 223.997Z"
      fill="#24A2EE"
    />
    <path
      d="M263.527 266.067L213.037 188.659L191.158 222.314L231.55 286.26L256.795 276.163L263.527 266.067Z"
      fill="#24A2EE"
    />
    <path
      clipRule="evenodd"
      d="M98.5944 136.492L191.158 82.6435L283.723 136.492V244.19L191.158 298.039L122.156 259.335L113.741 274.48L189.475 318.233C191.158 319.915 192.841 319.915 194.524 318.233L300.552 257.653C302.235 255.97 303.918 254.287 303.918 252.604V131.444C303.918 129.761 302.235 128.079 300.552 126.396L194.524 65.8157C192.841 64.1329 191.158 64.1329 189.475 65.8157L83.4475 124.713C81.7646 126.396 80.0816 128.079 80.0816 129.761V250.921C80.0816 252.604 81.7646 254.287 83.4475 255.97L105.326 267.749L115.424 252.604L100.277 244.19V136.492H98.5944Z"
      fill="#98BCDC"
      fillRule="evenodd"
    />
    <path
      d="M231.55 136.492H196.207L113.741 271.115L142.352 287.943L231.55 136.492Z"
      fill="white"
    />
    <path
      d="M142.352 149.955C150.767 136.492 174.329 136.492 184.427 138.175L103.643 267.749C100.277 266.066 93.5454 262.701 88.4965 259.335C81.7646 255.97 80.0816 255.97 80.0816 250.921V244.19C98.5944 217.266 133.937 163.417 142.352 149.955Z"
      fill="white"
    />
  </Wrapper>
)

export default Icon
