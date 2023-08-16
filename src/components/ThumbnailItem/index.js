import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onclick, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails
  const ActiveClassName = isActive ? 'selected' : ''

  const changeImage = () => {
    onclick(id)
  }

  return (
    <li className="list-item">
      <img
        src={thumbnailUrl}
        alt={thumbnailAltText}
        className={`thumbnail-image ${ActiveClassName}`}
        onClick={changeImage}
      />
    </li>
  )
}

export default ThumbnailItem
