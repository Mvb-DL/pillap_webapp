import React, {Component} from 'react';
import { loadUser } from '../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { deleteUserData } from '../../actions/update_data';


export class UserProfile extends Component  {

    static propTypes = {
      auth: PropTypes.object.isRequired,
      loadUser: PropTypes.func.isRequired,
    };

    deleteUser = async (e) => {
      e.preventDefault();
      const delete_user = await this.props.deleteUserData(this.props.username, this.props.password, this.props.email);

      if (delete_user){
        return <Redirect to="/login"/>
      }
      
    };

    render(){

      const styles = {

        account_heading : {
          fontWeight: "600"
        },

        account_sub_heading : {
          fontSize: "1.2em",
          marginBottom: "10%"
        },

        account_sub_sub_heading:{
          fontSize: "1.4em",
        },

        back_button:{
          backgroundColor: "#ed6524",
          border: "none"
        },

        user_profile_box:{
          marginBottom: "5%",
          marginTop: "3%"
        }
      }

      const { isAuthenticated, user } = this.props.auth;

      const only_auth = (

            <div className='container' style={styles.user_profile_box}>

              <h5 className='mb-4' style={styles.account_sub_sub_heading}>Dein Benutzerkonto</h5>


              <div className='row'>

                <div className='col-3'>

                  <ul>

                    <p><Link to="/change_user_profile">Account bearbeiten</Link></p>
                    <p><Link onClick={this.deleteUser} to="/login">Account löschen</Link></p>
                    <p><Link to="/wishlist">Wunschliste</Link></p>
                    <p><Link to="/order_settings">Bestellungen</Link></p>
                    <p><Link to="/helpcenter">Hilfe und FAQs</Link></p>
                    <p><Link to="/configurator">Konfigurator</Link></p>

                  </ul>

                </div>

                <div className='col-9'>

                  <h1 className='pb-1' style={styles.account_heading}>Dein Benutzerkonto</h1>

                  <h5 className='pb-5' style={styles.account_sub_heading}>willkommen in deinem Benutzerkonto! Hier kannst du deine Bestellungen und Kontoinformationen direkt verwalten.</h5>

                  <h3 className='pb-5'>Hey {user ? `${user.username}` : ''} es gibt nichts neues zu berichten :/</h3>

                  <Link to="/user_marketplace"><button className='btn btn-primary' style={styles.back_button}>Zurück zum Marktplatz</button></Link>

                </div>

              </div>

            </div>

          
        );

      const not_auth = (
        <div>
          <Redirect to="/login" />;
        </div>
      )

      return (

            <div onLoad={this.props.loadUser}>
                {isAuthenticated ? only_auth : not_auth}
            </div>
            
        )
    
    }
}

const mapStateToProps = (state) => ({

  auth: state.auth,
  
});

export default connect(mapStateToProps, { loadUser, deleteUserData })(UserProfile);
