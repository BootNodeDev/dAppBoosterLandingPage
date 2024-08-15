import { type FC, type HTMLAttributes } from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.svg`
  display: block;
  flex-shrink: 0;
`

const Icon: FC<HTMLAttributes<SVGElement>> = ({ ...restProps }) => (
  <Wrapper
    fill="none"
    height="15"
    viewBox="0 0 19 15"
    width="19"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <path
      d="M5.48547 1.49536C5.48547 1.29645 5.56449 1.10568 5.70514 0.965031C5.8458 0.824379 6.03656 0.745361 6.23547 0.745361H18.2355C18.4344 0.745361 18.6252 0.824379 18.7658 0.965031C18.9065 1.10568 18.9855 1.29645 18.9855 1.49536C18.9855 1.69427 18.9065 1.88504 18.7658 2.02569C18.6252 2.16634 18.4344 2.24536 18.2355 2.24536H6.23547C6.03656 2.24536 5.8458 2.16634 5.70514 2.02569C5.56449 1.88504 5.48547 1.69427 5.48547 1.49536ZM18.2355 6.74536H6.23547C6.03656 6.74536 5.8458 6.82438 5.70514 6.96503C5.56449 7.10568 5.48547 7.29645 5.48547 7.49536C5.48547 7.69427 5.56449 7.88504 5.70514 8.02569C5.8458 8.16634 6.03656 8.24536 6.23547 8.24536H18.2355C18.4344 8.24536 18.6252 8.16634 18.7658 8.02569C18.9065 7.88504 18.9855 7.69427 18.9855 7.49536C18.9855 7.29645 18.9065 7.10568 18.7658 6.96503C18.6252 6.82438 18.4344 6.74536 18.2355 6.74536ZM18.2355 12.7454H6.23547C6.03656 12.7454 5.8458 12.8244 5.70514 12.965C5.56449 13.1057 5.48547 13.2964 5.48547 13.4954C5.48547 13.6943 5.56449 13.885 5.70514 14.0257C5.8458 14.1663 6.03656 14.2454 6.23547 14.2454H18.2355C18.4344 14.2454 18.6252 14.1663 18.7658 14.0257C18.9065 13.885 18.9855 13.6943 18.9855 13.4954C18.9855 13.2964 18.9065 13.1057 18.7658 12.965C18.6252 12.8244 18.4344 12.7454 18.2355 12.7454ZM2.11047 0.370361C1.88797 0.370361 1.67046 0.436342 1.48546 0.559958C1.30045 0.683575 1.15626 0.859276 1.07111 1.06484C0.985961 1.27041 0.963682 1.49661 1.00709 1.71484C1.0505 1.93307 1.15764 2.13352 1.31498 2.29086C1.47231 2.44819 1.67277 2.55534 1.891 2.59874C2.10923 2.64215 2.33543 2.61987 2.54099 2.53473C2.74656 2.44958 2.92226 2.30538 3.04588 2.12038C3.16949 1.93537 3.23547 1.71787 3.23547 1.49536C3.23547 1.19699 3.11695 0.910844 2.90597 0.699866C2.69499 0.488888 2.40884 0.370361 2.11047 0.370361ZM2.11047 6.37036C1.88797 6.37036 1.67046 6.43634 1.48546 6.55996C1.30045 6.68357 1.15626 6.85928 1.07111 7.06484C0.985961 7.27041 0.963682 7.49661 1.00709 7.71484C1.0505 7.93307 1.15764 8.13352 1.31498 8.29086C1.47231 8.44819 1.67277 8.55534 1.891 8.59875C2.10923 8.64215 2.33543 8.61987 2.54099 8.53473C2.74656 8.44958 2.92226 8.30538 3.04588 8.12038C3.16949 7.93537 3.23547 7.71787 3.23547 7.49536C3.23547 7.19699 3.11695 6.91084 2.90597 6.69987C2.69499 6.48889 2.40884 6.37036 2.11047 6.37036ZM2.11047 12.3704C1.88797 12.3704 1.67046 12.4363 1.48546 12.56C1.30045 12.6836 1.15626 12.8593 1.07111 13.0648C0.985961 13.2704 0.963682 13.4966 1.00709 13.7148C1.0505 13.9331 1.15764 14.1335 1.31498 14.2909C1.47231 14.4482 1.67277 14.5553 1.891 14.5987C2.10923 14.6422 2.33543 14.6199 2.54099 14.5347C2.74656 14.4496 2.92226 14.3054 3.04588 14.1204C3.16949 13.9354 3.23547 13.7179 3.23547 13.4954C3.23547 13.197 3.11695 12.9108 2.90597 12.6999C2.69499 12.4889 2.40884 12.3704 2.11047 12.3704Z"
      fill="currentColor"
    />
  </Wrapper>
)

export default Icon
