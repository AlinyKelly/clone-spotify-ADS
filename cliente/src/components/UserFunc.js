const user_storage_key = 'usuarioLogado';

function user_login(data){
  localStorage.setItem(user_storage_key, JSON.stringify(data));
}

function user_logout(){
  localStorage.removeItem(user_storage_key);
}

function user_logado(){
  return user_get_storage() ? true : false;
}

function user_get_storage(){
  return localStorage.getItem(user_storage_key);
}

function user_get_userdata(){
  const vObject = JSON.parse(user_get_storage());
  return user_logado() ? vObject : null;
}

export {
  user_login,
  user_logout,
  user_logado,
  user_get_storage,
  user_get_userdata,
}