import React, {Component} from 'react';
import { updateUserData } from '../../actions/update_data';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class ChangeUserProfile extends Component {

    constructor(props) {
        
        super(props)

        const user = this.props.auth.user

        this.state = {
          username: user.username,
          email: user.email,
          password: user.password,
        };

      }
    
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        username: PropTypes.string,
    };

    upDateUser = (e) => {
        e.preventDefault();
        this.props.updateUserData(this.state.username, this.state.password, this.state.email);
        window.location.reload(false);
      };
    
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {

        const { user } = this.props.auth;

        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                  <h2 className="text-center">Account ändern</h2>
                  <form onSubmit={this.upDateUser} action="/user_profile">
                    <div className="form-group">
                      <label>Benutzername</label>
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        onChange={this.onChange}
                        placeholder={user.username}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={this.onChange}
                        placeholder={user.email}
                      />
                    </div>
                    <div className="form-row">
                    <div className="col-md-6 m-auto">
                    <div className="form-group">
                      <label>Vorname</label>
                      <input
                        type="text"
                        className="form-control"
                        name="first_name"
                      />
                    </div>
                    </div>
                    <div className="col-md-6 m-auto">
                    <div className="form-group">
                      <label>Nachname</label>
                      <input
                        type="text"
                        className="form-control"
                        name="last_name"
                      />
                    </div>
                    </div>
                    </div>
                    <div className="form-group">
                      <label>Passwort</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={this.onChange}              
                      />
                    </div>
                    <div className="form-group">

                      <div className='row'>
                        <div className='col'>
                          <button type="submit" className="btn btn-primary">
                              Aktualisieren
                          </button>
                          <div className='col'>
                            <button className="btn btn-primary">
                                Abrechen
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
export default connect(mapStateToProps, { updateUserData })(ChangeUserProfile);