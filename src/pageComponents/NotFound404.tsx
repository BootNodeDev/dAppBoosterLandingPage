import styled from 'styled-components'

import { useNavigate } from '@tanstack/react-router'
import { GeneralMessage } from 'db-ui-toolkit'

import { PrimaryButton } from '@/src/sharedComponents/Buttons'

const Icon = () => (
  <svg fill="none" height="152" width="98" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M81.747 95.378c-.295-.785-.59-1.57-.84-2.379-2.93-9.602-4.588-30.266-5.633-42.225C72.866 23.715 63.486 1.526 48.995.718v-.18c-14.49.786-23.87 22.998-26.278 50.034-1.068 11.981-2.703 32.623-5.633 42.226a58.322 58.322 0 01-.84 2.378c-45.108 23.222 21.804 26.273 32.751 26.43v.18c10.948-.157 77.882-3.209 32.752-26.43v.022z"
      fill="#2E3048"
    />
    <path
      d="M69.71 131.052c3.951-7.086 6.813-17.057 6.813-22.644 0-1.408-.136-2.862-.363-4.247-.795-4.861-3.453-8.154-6.405-8.132h-.069c-2.975 0-5.61 3.271-6.405 8.132a26.808 26.808 0 00-.363 4.247c0 5.587 2.862 15.535 6.814 22.644h-.023z"
      fill="#C11C79"
    />
    <path
      d="M69.71 116.766c2.134-3.838 3.679-9.244 3.679-12.265 0-.772-.068-1.544-.182-2.294-.431-2.634-1.862-4.406-3.475-4.406h-.046c-1.612 0-3.043 1.772-3.475 4.406-.136.75-.181 1.545-.181 2.294 0 3.021 1.544 8.427 3.68 12.265z"
      fill="#FF438B"
    />
    <path
      d="M28.122 132.12c3.952-7.087 6.814-17.057 6.814-22.645 0-1.408-.136-2.862-.363-4.247-.795-4.861-3.453-8.154-6.405-8.131h-.069c-2.975 0-5.61 3.27-6.404 8.131a26.796 26.796 0 00-.364 4.247c0 5.588 2.862 15.536 6.814 22.645h-.023z"
      fill="#C11C79"
    />
    <path
      d="M28.122 116.766c2.135-3.838 3.68-9.244 3.68-12.265 0-.772-.069-1.544-.205-2.294-.431-2.634-1.862-4.406-3.475-4.406h-.045c-1.613 0-3.044 1.772-3.475 4.406-.137.75-.205 1.545-.205 2.294 0 3.021 1.545 8.427 3.68 12.265h.045z"
      fill="#FF438B"
    />
    <path
      d="M48.904 151.539c6.314-10.425 10.88-25.029 10.88-33.228 0-2.09-.205-4.202-.568-6.246-1.295-7.132-5.52-11.97-10.266-11.947h-.114c-4.747-.023-8.971 4.792-10.266 11.947a35.886 35.886 0 00-.568 6.246c0 8.199 4.566 22.826 10.88 33.228h.022z"
      fill="#C11C79"
    />
    <path
      d="M48.904 130.803c2.862-4.566 4.929-10.993 4.929-14.605 0-.908-.09-1.839-.25-2.748-.59-3.134-2.498-5.269-4.633-5.247h-.046c-2.135 0-4.065 2.113-4.633 5.247-.16.909-.25 1.84-.25 2.748 0 3.612 2.067 10.017 4.929 14.605h-.046z"
      fill="#FF438B"
    />
    <path
      d="M49.04 3.657c-13.377 0-21.145 28.118-22.94 48.764-.771 8.971-1.884 25.12-3.247 32.525-.795 4.406-3.52 11.629-3.725 12.196-12.197 7.541-15.036 11.016-14.332 11.879.318.363 4.974-.568 10.403-1.703 4.224-.886 8.994-1.749 12.083-3.294 12.06-5.996 10.334-18.602 12.401-18.67 2.362-.068.954 3.793 2.703 8.018 2.34 5.678 8.472 12.038 23.03 9.857-4.042-3.52-4.905-17.738-2.362-17.738 1.908 0 .318 7.427 8.222 15.013 7.246 6.973 22.123 9.039 22.236 8.494.5-2.748-10.039-8.313-14.672-11.788-3.203-7.563-5.542-39.906-6.087-44.903-2.544-23.326-9.858-48.673-23.69-48.673l-.022.023z"
      fill="#fff"
    />
    <path
      d="M49.04 3.657c13.833 0 21.169 25.347 23.69 48.673.545 4.974 2.885 37.34 6.087 44.903 4.633 3.475 15.15 9.017 14.672 11.788 0 .045-.159.091-.454.091-2.566 0-15.24-2.317-21.759-8.585-7.904-7.61-6.314-15.014-8.222-15.014-2.543 0-1.68 14.219 2.362 17.739a37.965 37.965 0 01-5.541.432c-10.63 0-15.468-5.406-17.49-10.312-1.725-4.202-.385-8.018-2.657-8.018h-.068c-2.067.069-.34 12.674-12.4 18.67-3.09 1.545-7.837 2.385-12.084 3.294-4.588.976-8.654 1.794-9.97 1.794-.228 0-.387-.023-.432-.091-.705-.84 2.135-4.338 14.331-11.879.227-.59 2.93-7.79 3.725-12.196 1.34-7.405 2.453-23.53 3.248-32.525 1.84-20.669 9.585-48.764 22.963-48.764zm0-3.657C31.644 0 24.149 32.752 22.468 52.103c-.16 1.908-.34 4.111-.545 6.496-.727 8.903-1.636 20.01-2.658 25.665-.545 2.998-2.203 7.859-3.134 10.403-14.332 8.994-14.786 11.788-15.036 13.309-.204 1.227.114 2.431.886 3.362s1.862 1.408 3.248 1.408c1.385 0 4.02-.454 10.72-1.885l1.59-.341c4.043-.84 8.245-1.703 11.357-3.271 5.86-2.907 8.971-7.199 10.765-11.083 2.362 4.701 7.882 11.129 20.215 11.129 1.907 0 3.952-.159 6.064-.477l6.269-.931c7.677 5.065 18.215 6.836 20.827 6.836 3.407 0 3.998-2.793 4.066-3.111.772-4.361-4.27-7.609-11.266-12.129-1.453-.931-2.839-1.817-3.952-2.612-2.294-7.04-4.292-29.617-5.065-38.362-.181-2.135-.34-3.77-.431-4.61C74.683 36.318 68.619 0 49.04 0z"
      fill="#2E3048"
    />
    <path
      d="M40.5 48.583c2.572 0 4.657-3.63 4.657-8.109 0-4.478-2.085-8.108-4.656-8.108-2.572 0-4.657 3.63-4.657 8.108 0 4.478 2.085 8.109 4.657 8.109zM57.717 48.583c2.571 0 4.656-3.63 4.656-8.109 0-4.478-2.085-8.108-4.656-8.108-2.572 0-4.656 3.63-4.656 8.108 0 4.478 2.084 8.109 4.656 8.109z"
      fill="#2E3048"
    />
    <path
      d="M62.6 14.014C59.034 7.677 54.56 3.657 49.04 3.657c-5.132 0-14.69 5.61-20.368 32.865C35.486 24.03 41.164 9.267 49.404 10.243c4.679 0 9.085 1.34 13.173 3.748l.023.023zM42.408 84.582c-.794 3.612-1.067 6.473.75 10.357 1.567 2.907 4.247 5.769 8.608 7.382-6.61-6.587-7.268-10.266-9.335-17.739h-.023zM28.35 103.411c1.09-3.702 2.27-11.016 2.112-14.945-.205 1.408-4.202 9.607-4.202 9.607s-4.338 4.929-10.153 9.017c3.998-.84 8.29-1.68 11.152-3.089.386-.181.75-.386 1.09-.59zM64.258 83.06c0 2.771.318 8.132 2.885 12.31.976 1.636 2.294 3.385 4.11 5.134 5.384 5.178 14.991 7.654 19.602 8.358-16.467-8.154-21.668-15.013-26.597-25.802z"
      fill="#E2E0E7"
    />
    <path
      d="M49.404 56.85c1.066 0 1.93-1.098 1.93-2.453 0-1.355-.864-2.453-1.93-2.453-1.066 0-1.93 1.098-1.93 2.453 0 1.355.864 2.453 1.93 2.453z"
      fill="#2E3048"
    />
  </svg>
)

const Wrapper = styled(GeneralMessage)`
  margin: auto;
`

const HomeButton = styled(PrimaryButton)`
  height: 44px;
  font-size: 1.8rem;
  width: 100%;
`

const NotFound404 = ({ ...restProps }) => {
  const navigate = useNavigate()

  return (
    <Wrapper
      actionButton={<HomeButton onClick={() => navigate({ to: '/' })}>Home</HomeButton>}
      icon={<Icon />}
      message="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
      title="404 - Not Found"
      {...restProps}
    />
  )
}

export default NotFound404
