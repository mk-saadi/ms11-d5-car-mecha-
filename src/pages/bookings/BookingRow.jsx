const BookingRow = ({ book, handleDelete, handleConfirm }) => {
    return (
        <tr className="text-gray-600">
            <th className="bg-slate-100">
                <button
                    onClick={() => handleDelete(book._id)}
                    className="btn btn-circle btn-outline"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </th>
            <td className="bg-slate-100">
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-md w-16 h-16">
                            {book.img && (
                                <img
                                    src={book.img}
                                    alt="Avatar Tailwind CSS Component"
                                />
                            )}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{book.service}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td className="bg-slate-100">${book.price}</td>
            <td className="bg-slate-100">{book.date}</td>
            <th className="bg-slate-100">
                {book.status === "confirm" ? (
                    <button
                        className="btn btn-success btn-xs text-white no-animation"
                        onClick={() => handleConfirm(book._id)}
                    >
                        confirmed
                    </button>
                ) : (
                    <button
                        className="btn btn-error btn-xs text-white no-animation"
                        onClick={() => handleConfirm(book._id)}
                    >
                        confirm?
                    </button>
                )}
            </th>
        </tr>
    );
};

export default BookingRow;
