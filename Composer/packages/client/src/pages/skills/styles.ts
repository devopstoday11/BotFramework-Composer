// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FontWeights, FontSizes } from 'office-ui-fabric-react/lib/Styling';
import { css } from '@emotion/core';

export const ContainerStyle = css`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ContentHeaderStyle = css`
  padding: 5px 20px;
  height: 60px;
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = css`
  font-size: ${FontSizes.xLarge};
  font-weight: ${FontWeights.semibold};
`;

export const ContentStyle = css`
  margin-left: 2px;
  display: flex;
  border-top: 1px solid #dddddd;
  flex: 1;
  position: relative;
  nav {
    ul {
      margin-top: 0px;
    }
  }
`;

export const TableView = css`
  flex: 4;
  margin: 20px;
  position: relative;
  overflow: visible;
  fontsize: 16px;
`;

export const TableCell = css`
  white-space: pre-wrap;
  font-size: 14px;
  textarea,
  input {
    border: 1px solid #dddddd;
  }
`;

export const FormFieldAlignHorizontalBotSettings = css`
  max-width: 1500px;
  margin-top: 20px;
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding-bottom: 15px;
`;

export const ManifestModalHeaderStyle = css`
  margin: 14px 0 0 16px;
  font-size: 20px;
  font-weight: bolder;
  align-items: left;
`;
