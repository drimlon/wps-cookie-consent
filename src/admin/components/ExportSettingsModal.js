import { __ } from '@wordpress/i18n';
import {
  Button,
  Flex,
  FlexItem,
  Modal,
} from '@wordpress/components';

function ExportSettingsModal(props) {
  const { isOpen, onClose, exportSettings } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <Modal
      title={__('Export settings?', 'wps-cookie-consent')}
      onRequestClose={onClose}
    >
      <Flex direction="column">
        <p>
          <strong>
            {__('You have unsaved changes.', 'wps-cookie-consent')}
          </strong>
          &nbsp;
          {__('Those changes won\'t be exported. Are you sure you want to proceed?', 'wps-cookie-consent')}
        </p>
        <Flex justify="flex-end">
          <FlexItem>
            <Button
              variant="tertiary"
              onClick={onClose}
            >
              {__('Cancel', 'wps-cookie-consent')}
            </Button>
          </FlexItem>
          <FlexItem>
            <Button
              variant="primary"
              onClick={() => {
                exportSettings();
                onClose();
              }}
            >
              {__('Export anyway', 'wps-cookie-consent')}
            </Button>
          </FlexItem>
        </Flex>
      </Flex>
    </Modal>
  );
}

export default ExportSettingsModal;
