import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
  Button,
  Flex,
  FlexItem,
  Modal,
  SelectControl,
} from '@wordpress/components';

import { languages } from './Languages';

function NewLanguageModal(props) {
  const { isOpen, onClose, addLanguage } = props;

  const [selectedLanguage, setSelectedLanguage] = useState('en');

  if (!isOpen) {
    return null;
  }

  return (
    <Modal
      title={__('New Language', 'wps-cookie-consent')}
      onRequestClose={onClose}
    >
      <Flex direction="column">
        <SelectControl
          label={__('Language', 'wps-cookie-consent')}
          value={selectedLanguage}
          options={
            Object
              .keys(languages)
              .map((key) => ({
                label: languages[key],
                value: key,
              }))
              .toSorted((a, b) => ((a.label > b.label) ? 1 : -1))
          }
          onChange={setSelectedLanguage}
        />
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
                addLanguage(selectedLanguage);
                onClose();
              }}
            >
              {__('Add', 'wps-cookie-consent')}
            </Button>
          </FlexItem>
        </Flex>
      </Flex>
    </Modal>
  );
}

export default NewLanguageModal;
