import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import SubmitInput from './SubmitInput';
import Form from './Form';

export default class SearchPage extends Component {
  getInputValue = () => {
    return this.input.value;
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.handleSubmit();
    }
  }

  handleSubmit = () => {
    const postCode = this.getInputValue();
    this.props.history.push(`search?postCode=${postCode}`);
  }

  render () {
    return (
      <div className={css(styles.container)}>
        <header className={css(styles.header)}>
          <Form onSubmit={this.handleSubmit}>
            <input type="search"
                   className={css(styles.input)}
                   placeholder="Enter Postcode"
                   ref={(c) => { this.input = c; }}
                   onKeyUp={this.handleKeyUp} required />
            <SubmitInput />
          </Form>
        </header>
        <article className={css(styles.article)}>
          <h2 className={css(styles.h2)}>Features</h2>
          <div className={css(styles.content)}>
            <section className={css(styles.section)}>
              <h3 className={css(styles.h3)}>Search houses</h3>
              <p>Loren lipsum</p>
            </section>
            <section className={css(styles.section)}>
              <h3 className={css(styles.h3)}>Manage issues</h3>
              <p>Loren lipsum</p>
            </section>
            <section className={css(styles.section)}>
              <h3 className={css(styles.h3)}>Track communication</h3>
              <p>Loren lipsum</p>
            </section>
            <section className={css(styles.section)}>
              <h3 className={css(styles.h3)}>Refer and earn</h3>
              <p>Loren lipsum</p>
            </section>
          </div>
        </article>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    display: 'flex',
    width: '100%'
  },
  article: {
    margin: '0 auto auto',
    maxWidth: '60rem',
    padding: '3em 2rem',
  },
  h2: {
    width: '100%',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: '2rem',
    color: '#ff5a5f'
  },
  h3: {
    display: 'flex',
    alignItems: 'center',
    color: '#7d93aa',
    fontSize: '1.4em',
    fontWeight: '400',
    marginBottom: '.75rem',
    marginTop: '1rem'
  },
  section: {
    width: 'calc(50% - 1rem)',
    fontSize: '1.1rem'
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header: {
    backgroundImage: "url('https://images.unsplash.com/photo-1451934403379-ffeff84932da?auto=format&fit=crop&w=1284&q=80')",
    backgroundPosition: 'center',
    padding: '8rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    border: 0,
    margin: 0,
    padding: '10px',
    background: 'white',
    lineHeight: '50px',
    fontSize: '20px',
    borderRadius: 0,
    outline: 0,
    borderRight: '1px solid rgba(0,0,0,0.2)'
  }
});
