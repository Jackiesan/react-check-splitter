import React from 'react';

import './CheckSplitterContainer.css';

import CheckForm from './CheckForm';
import SplitInfo from './SplitInfo';

const FORM_KEYS = ['subtotal', 'tip', 'tax', 'split'];

class CheckSplitterContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      subtotal: '0',
      tip: '20',
      tax: '10',
      split: '1',
    }
  }

  updateCheck = (key, value) => {
    if (!FORM_KEYS.includes(key)) {
      throw new Error(`Invalid key "${key}" passed in to updateCheck (value "${value}")`);
    }
    console.log(`Updating check, ${key}: ${value}`);
    const update = {}
    update[key] = value;
    this.setState(update);
  }

  calculateSplit() {
    const taxAmount = this.state.subtotal * (this.state.tax/100)

    const tipAmount = this.state.subtotal * (this.state.tip/100)

    const totalAmount = taxAmount + tipAmount + parseFloat(this.state.subtotal)

    const splitSum = totalAmount / this.state.split

    return {
      taxAmount: taxAmount.toFixed(2),
      tipAmount: tipAmount.toFixed(2),
      totalPrice: totalAmount.toFixed(2),
      pricePerHead: splitSum.toFixed(2),
    }
  }

  render() {
    return(
      <div className="check-splitter-container">
        <CheckForm
          subtotal={this.state.subtotal}
          tip={this.state.tip}
          tax={this.state.tax}
          split={this.state.split}
          updateCheckCallback={this.updateCheck}
          />
        <SplitInfo
          taxAmount={this.calculateSplit().taxAmount}
          tipAmount={this.calculateSplit().tipAmount}
          totalPrice={this.calculateSplit().totalPrice}
          pricePerHead={this.calculateSplit().pricePerHead}
        />
      </div>
    );
  }
}

export default CheckSplitterContainer;
