
import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Container from 'components/Container';
import BigLeftContainerFluid from 'components/BigLeftContainerFluid';
import SmallRightContainerFluid from 'components/SmallRightContainerFluid';
import EditableText from 'components/EditableText';
import IconContainer from 'components/IconContainer';
import IconEdit from 'components/IconEdit';
import IconDelete from 'components/IconDelete';
import PostRelated from 'containers/PostRelated';

function PostEditableContent(props) {
  let Component = () => (
    <>
      <BigLeftContainerFluid>
       
        <IconContainer>
          <IconEdit 
            render={ props.isAuthenticated } 
            onClick={ () => props.canEdit(props.event, true) } 
          />
          
          <IconDelete
            render={ props.isAuthenticated } 
            onClick={ () => props.renderDeleteModal(true) } 
          />
        </IconContainer>

        <EditableText content={ props.content } />
      </BigLeftContainerFluid> 

      <SmallRightContainerFluid>
        <PostRelated tags={ props.tags } />
      </SmallRightContainerFluid>

    </>
  );

  // Here I need to return the value in this way, because if I used the component 
  // the edit does not work.
  if (props.editable) {
    return (
      <Container className="offset-md-1">
        <EditableText 
            editable={ props.editable } 
            content={ props.content } 
            onChangeContent={ props.onChangeContent } 
            onSave = { props.onSave } 
            onSaveStatus = { props.onSaveStatus }
            onClose = {() => props.canEdit(props.event, false)} 
          />
      </Container>
    );
  }

  return <Component />
}

PostEditableContent.propTypes = {
  isAuthenticated: PropTypes.bool,
  content: PropTypes.string,
  canEdit: PropTypes.func,
  renderDeleteModal: PropTypes.func,
  tags: PropTypes.array,
  onChangeContent: PropTypes.func,
  editable: PropTypes.bool,
  onSave: PropTypes.func,
  onSaveStatus: PropTypes.number,
  event: PropTypes.string,
};

export default memo(PostEditableContent);
