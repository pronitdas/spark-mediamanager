import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { editVideoSetPath, editVideoClose } from '../actions/videos'
import EditVideoComponent from '../components/EditVideo'

function mapStateToProps (state, ownProps) {
  return {
    video: state.videos.editVideo.video
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClose: () => { dispatch(push('/')); dispatch(editVideoClose()) },
    setVideoPath: (path) => dispatch(editVideoSetPath(path))
  }
}

const EditVideoContainer = connect(mapStateToProps, mapDispatchToProps)(EditVideoComponent)

export default EditVideoContainer
