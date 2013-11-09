class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception


  def getUserInfo(userInfo = nil)
    userInfo = User.find_by userid: "#{userInfo}"
    if (userInfo != nil)
      userInfo
    else
      nil
    end
  end

  def validate
  
    respond_to do |format|
      user = User.authenticate(params[:userid], params[:password])
      if user
        session[:user_id] = user.userid
        flash[:notice] = 'User successfully logged in'
      else
        flash[:notice] = 'Invalid user/password'
      end
      if session[:return_to_page] === nil
        format.html {redirect_to "/reviews"}
      else
      format.html {redirect_to "#{session[:return_to_page]}" }
      end
    end  
  end

  def logout
    
    respond_to do |format|
      session.delete(:user_id)
      flash[:notice] = 'User successfully logged out'
      format.html {redirect_to '/reviews' }
    end
  end

  def getUser
    user = session[:user_id]
    user
  end


  def search
    pattern = params[:searchFor]
    pattern = "%" + pattern + "%"

    #'pattern' variable must be listed as many times as '?' is used.
    #@reviews = Review.where("title LIKE ? OR article LIKE ? OR poster LIKE ?", pattern, pattern, pattern)
    @reviews = Review.paginate(:page => params[:page], :per_page => 5).
    where("title LIKE ? OR article LIKE ? OR poster LIKE ?", pattern, pattern, pattern)
  end


end

