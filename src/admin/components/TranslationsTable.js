import { Button, Flex, FlexItem } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
  edit as EditIcon,
  trash as TrashIcon,
} from '@wordpress/icons';

import styled from 'styled-components';

import Table, { Header, Row, Column } from './Table';
import { LanguageFlag, nameByLanguageCode } from './Languages';

const StyledButton = styled(Button)`
  color: #3c434a;
  min-width: 24px;
  height: 24px;
  padding: 0;
  &:hover {
    color: #0073aa;
  },
`;

function TranslationsTable(props) {
  const {
    languages = [],
    // eslint-disable-next-line no-unused-vars
    onEdit = (languageCode) => {},
    // eslint-disable-next-line no-unused-vars
    onDelete = (languageCode) => {},
  } = props;

  return (
    <Table style={{ width: '340px' }}>
      <Header>
        <Column>
          {__('Language', 'wps-cookie-consent')}
        </Column>
        <Column style={{ maxWidth: '70px' }}>
          {__('Actions', 'wps-cookie-consent')}
        </Column>
      </Header>
      {languages.map((languageCode) => (
        <Row>
          <Column>
            <Flex style={{ justifyContent: 'flex-start' }}>
              <FlexItem>
                <LanguageFlag
                  language={languageCode}
                  style={{ verticalAlign: 'middle' }}
                  height={20}
                />
              </FlexItem>
              <FlexItem
                style={{
                  maxWidth: '160px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {nameByLanguageCode(languageCode)}
              </FlexItem>
            </Flex>
          </Column>
          <Column style={{ maxWidth: '70px' }}>
            <Flex style={{ justifyContent: 'flex-start' }}>
              <FlexItem>
                <StyledButton
                  icon={EditIcon}
                  label={__('Edit', 'wps-cookie-consent')}
                  onClick={() => onEdit(languageCode)}
                />
              </FlexItem>
              <FlexItem>
                <StyledButton
                  icon={TrashIcon}
                  label={__('Delete', 'wps-cookie-consent')}
                  onClick={() => onDelete(languageCode)}
                />
              </FlexItem>
            </Flex>
          </Column>
        </Row>
      ))}
    </Table>
  );
}

export default TranslationsTable;
