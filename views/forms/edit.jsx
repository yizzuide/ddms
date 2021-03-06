var React = require('react');
var DefaultLayout = require('../layouts/default');
var Navigation = require('../components/navigation');

module.exports = React.createClass({
  render: function () {
    var data = this.props.form;
    var scripts = [
        '/js/components/Forms.edit.js?jsx',
        '/ckeditor/ckeditor.js',
        '/ckeditor/adapters/jquery.js',
        ];
    return (
      <DefaultLayout title="Edit Form" scripts={scripts}>
        <div id="wrapper">
          {/* Navigation */}
          <Navigation></Navigation>
          <div id="page-wrapper">
            <div className="row row-same-height">
              <div className="col-xs-12 col-xs-height"><h3><a href={'/forms/'+data.project}>Forms</a> / Edit form</h3></div>
              <div className="col-xs-2 col-xs-height col-middle">
                <div className="pull-right">
                  <a href={"/formdatas/"+data._id} className="btn btn-default btn-circle"><i className="fa fa-database"></i></a>
                  &nbsp;&nbsp;&nbsp;&nbsp;<a href={'/forms/delete/'+data._id} className="btn btn-default btn-circle"><i
                  className="fa fa-minus"></i></a>
                </div>
              </div>
            </div>
            <div id="form-wrapper"></div>
          </div>
          <script dangerouslySetInnerHTML={{__html:`
            window.__formData = ${JSON.stringify(data)};
          `}}/>
        </div>
      </DefaultLayout>
    );
  }
});
