module.exports = function(sessionStore) {

	return function(req, device, callback) {

		// check if a session token was passed
		var sessionId = req.query.token;

		// try to load the session
		sessionStore.load(sessionId, function(err, session) {

			// if there was an error or no session
			if (err || !session) {

				// start a new session
				sessionStore.set(sessionId, {
					cookie : {
						path : '/',
						_expires : null,
						originalMaxAge : null,
						httpOnly : true
					}
				}, function() {

					// load the newly created session
					sessionStore.load(sessionId, function(err, session) {

						// TEMP
						session.device = {
							'name' : device.name,
							'form' : device.form,
							'os' : device.os
						};

						// set the session as part of the request
						req.session = session;
						callback(err, true);

					});

				});

			} else {

				// TEMP
				session.device = {
					'name' : device.name,
					'form' : device.form,
					'os' : device.os
				};

				// set the session as part of the request
				req.session = session;
				callback(err, true);

			}

		});

	};

};
