import { __ } from '@wordpress/i18n';
import {
  Button,
  Flex,
  FlexItem,
  Modal,
} from '@wordpress/components';

function ClearRecordsModal(props) {
  const { isOpen, onClose, clearRecords } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <Modal
      title={__('Clear records?', 'wps-cookie-consent')}
      onRequestClose={onClose}
    >
      <Flex direction="column">
        <p>
          <strong>
            {__('This action cannot be undone.', 'wps-cookie-consent')}
          </strong>
          &nbsp;
          {
            __(
              'You are about to permanently clear all consent records. Are you sure you want to proceed?',
              'wps-cookie-consent',
            )
          }
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
              className="is-destructive"
              onClick={() => {
                clearRecords();
                onClose();
              }}
            >
              {__('Delete records', 'wps-cookie-consent')}
            </Button>
          </FlexItem>
        </Flex>
      </Flex>
    </Modal>
  );
}

export default ClearRecordsModal;
