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
    <button type="button>  
    <img
        src={thumbnailUrl}
        alt={thumbnailAltText}
        className={`thumbnail-image ${ActiveClassName}`}
        onClick={changeImage}
      />
          </button>
    </li>
  )
}

export default ThumbnailItem
